import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo25Component } from './lib33-demo25.component';

describe('Lib33Demo25Component', () => {
  let component: Lib33Demo25Component;
  let fixture: ComponentFixture<Lib33Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
