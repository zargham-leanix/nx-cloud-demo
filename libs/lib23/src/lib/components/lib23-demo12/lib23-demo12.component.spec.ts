import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo12Component } from './lib23-demo12.component';

describe('Lib23Demo12Component', () => {
  let component: Lib23Demo12Component;
  let fixture: ComponentFixture<Lib23Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
