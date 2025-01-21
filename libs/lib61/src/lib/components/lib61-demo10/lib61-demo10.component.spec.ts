import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo10Component } from './lib61-demo10.component';

describe('Lib61Demo10Component', () => {
  let component: Lib61Demo10Component;
  let fixture: ComponentFixture<Lib61Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
