import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo31Component } from './lib86-demo31.component';

describe('Lib86Demo31Component', () => {
  let component: Lib86Demo31Component;
  let fixture: ComponentFixture<Lib86Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
