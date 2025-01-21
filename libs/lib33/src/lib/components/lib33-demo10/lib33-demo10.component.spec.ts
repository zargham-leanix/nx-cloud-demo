import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo10Component } from './lib33-demo10.component';

describe('Lib33Demo10Component', () => {
  let component: Lib33Demo10Component;
  let fixture: ComponentFixture<Lib33Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
