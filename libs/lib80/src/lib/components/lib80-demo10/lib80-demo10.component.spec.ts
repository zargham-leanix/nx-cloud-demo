import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo10Component } from './lib80-demo10.component';

describe('Lib80Demo10Component', () => {
  let component: Lib80Demo10Component;
  let fixture: ComponentFixture<Lib80Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
