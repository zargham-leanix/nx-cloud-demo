import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo31Component } from './lib88-demo31.component';

describe('Lib88Demo31Component', () => {
  let component: Lib88Demo31Component;
  let fixture: ComponentFixture<Lib88Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
