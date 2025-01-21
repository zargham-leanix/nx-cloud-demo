import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo8Component } from './lib33-demo8.component';

describe('Lib33Demo8Component', () => {
  let component: Lib33Demo8Component;
  let fixture: ComponentFixture<Lib33Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
