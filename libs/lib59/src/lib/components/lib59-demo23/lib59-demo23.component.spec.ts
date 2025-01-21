import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo23Component } from './lib59-demo23.component';

describe('Lib59Demo23Component', () => {
  let component: Lib59Demo23Component;
  let fixture: ComponentFixture<Lib59Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
