import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo4Component } from './lib23-demo4.component';

describe('Lib23Demo4Component', () => {
  let component: Lib23Demo4Component;
  let fixture: ComponentFixture<Lib23Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
