import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo23Component } from './lib23-demo23.component';

describe('Lib23Demo23Component', () => {
  let component: Lib23Demo23Component;
  let fixture: ComponentFixture<Lib23Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
