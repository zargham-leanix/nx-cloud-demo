import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo19Component } from './lib13-demo19.component';

describe('Lib13Demo19Component', () => {
  let component: Lib13Demo19Component;
  let fixture: ComponentFixture<Lib13Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
