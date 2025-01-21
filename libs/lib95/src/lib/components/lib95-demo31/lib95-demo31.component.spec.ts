import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo31Component } from './lib95-demo31.component';

describe('Lib95Demo31Component', () => {
  let component: Lib95Demo31Component;
  let fixture: ComponentFixture<Lib95Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
