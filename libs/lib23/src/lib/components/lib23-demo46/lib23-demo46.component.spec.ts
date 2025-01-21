import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo46Component } from './lib23-demo46.component';

describe('Lib23Demo46Component', () => {
  let component: Lib23Demo46Component;
  let fixture: ComponentFixture<Lib23Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
