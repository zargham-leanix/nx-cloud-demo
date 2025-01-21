import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo31Component } from './lib94-demo31.component';

describe('Lib94Demo31Component', () => {
  let component: Lib94Demo31Component;
  let fixture: ComponentFixture<Lib94Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
