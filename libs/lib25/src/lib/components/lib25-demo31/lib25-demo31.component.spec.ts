import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo31Component } from './lib25-demo31.component';

describe('Lib25Demo31Component', () => {
  let component: Lib25Demo31Component;
  let fixture: ComponentFixture<Lib25Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
