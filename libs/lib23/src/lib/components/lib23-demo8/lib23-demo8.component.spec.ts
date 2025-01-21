import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo8Component } from './lib23-demo8.component';

describe('Lib23Demo8Component', () => {
  let component: Lib23Demo8Component;
  let fixture: ComponentFixture<Lib23Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
