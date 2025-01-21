import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo23Component } from './lib80-demo23.component';

describe('Lib80Demo23Component', () => {
  let component: Lib80Demo23Component;
  let fixture: ComponentFixture<Lib80Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
