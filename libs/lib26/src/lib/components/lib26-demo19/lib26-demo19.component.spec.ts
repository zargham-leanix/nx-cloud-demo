import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo19Component } from './lib26-demo19.component';

describe('Lib26Demo19Component', () => {
  let component: Lib26Demo19Component;
  let fixture: ComponentFixture<Lib26Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
