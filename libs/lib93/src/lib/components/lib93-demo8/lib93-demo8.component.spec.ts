import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo8Component } from './lib93-demo8.component';

describe('Lib93Demo8Component', () => {
  let component: Lib93Demo8Component;
  let fixture: ComponentFixture<Lib93Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
