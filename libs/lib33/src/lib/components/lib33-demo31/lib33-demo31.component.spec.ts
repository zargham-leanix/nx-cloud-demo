import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo31Component } from './lib33-demo31.component';

describe('Lib33Demo31Component', () => {
  let component: Lib33Demo31Component;
  let fixture: ComponentFixture<Lib33Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
