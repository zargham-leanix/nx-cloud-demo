import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo8Component } from './lib86-demo8.component';

describe('Lib86Demo8Component', () => {
  let component: Lib86Demo8Component;
  let fixture: ComponentFixture<Lib86Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
