import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo44Component } from './lib7-demo44.component';

describe('Lib7Demo44Component', () => {
  let component: Lib7Demo44Component;
  let fixture: ComponentFixture<Lib7Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
