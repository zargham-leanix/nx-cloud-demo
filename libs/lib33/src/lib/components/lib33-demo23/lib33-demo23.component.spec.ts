import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo23Component } from './lib33-demo23.component';

describe('Lib33Demo23Component', () => {
  let component: Lib33Demo23Component;
  let fixture: ComponentFixture<Lib33Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
