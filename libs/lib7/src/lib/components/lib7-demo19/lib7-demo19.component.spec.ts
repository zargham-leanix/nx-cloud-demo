import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo19Component } from './lib7-demo19.component';

describe('Lib7Demo19Component', () => {
  let component: Lib7Demo19Component;
  let fixture: ComponentFixture<Lib7Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
