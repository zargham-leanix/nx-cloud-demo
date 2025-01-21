import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo23Component } from './lib85-demo23.component';

describe('Lib85Demo23Component', () => {
  let component: Lib85Demo23Component;
  let fixture: ComponentFixture<Lib85Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
