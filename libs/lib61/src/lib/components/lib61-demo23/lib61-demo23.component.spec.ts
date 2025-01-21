import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo23Component } from './lib61-demo23.component';

describe('Lib61Demo23Component', () => {
  let component: Lib61Demo23Component;
  let fixture: ComponentFixture<Lib61Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
