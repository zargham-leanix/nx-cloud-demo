import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo8Component } from './lib94-demo8.component';

describe('Lib94Demo8Component', () => {
  let component: Lib94Demo8Component;
  let fixture: ComponentFixture<Lib94Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
