import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo43Component } from './lib44-demo43.component';

describe('Lib44Demo43Component', () => {
  let component: Lib44Demo43Component;
  let fixture: ComponentFixture<Lib44Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
