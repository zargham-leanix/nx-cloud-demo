import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo31Component } from './lib4-demo31.component';

describe('Lib4Demo31Component', () => {
  let component: Lib4Demo31Component;
  let fixture: ComponentFixture<Lib4Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
