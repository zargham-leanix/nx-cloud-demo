import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo8Component } from './lib21-demo8.component';

describe('Lib21Demo8Component', () => {
  let component: Lib21Demo8Component;
  let fixture: ComponentFixture<Lib21Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
