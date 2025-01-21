import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo31Component } from './lib56-demo31.component';

describe('Lib56Demo31Component', () => {
  let component: Lib56Demo31Component;
  let fixture: ComponentFixture<Lib56Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
