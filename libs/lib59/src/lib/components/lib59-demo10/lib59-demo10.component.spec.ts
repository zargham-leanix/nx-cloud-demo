import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo10Component } from './lib59-demo10.component';

describe('Lib59Demo10Component', () => {
  let component: Lib59Demo10Component;
  let fixture: ComponentFixture<Lib59Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
