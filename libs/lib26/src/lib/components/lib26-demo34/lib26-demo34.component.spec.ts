import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo34Component } from './lib26-demo34.component';

describe('Lib26Demo34Component', () => {
  let component: Lib26Demo34Component;
  let fixture: ComponentFixture<Lib26Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
