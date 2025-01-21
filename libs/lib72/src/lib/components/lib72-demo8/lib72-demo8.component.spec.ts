import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo8Component } from './lib72-demo8.component';

describe('Lib72Demo8Component', () => {
  let component: Lib72Demo8Component;
  let fixture: ComponentFixture<Lib72Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
