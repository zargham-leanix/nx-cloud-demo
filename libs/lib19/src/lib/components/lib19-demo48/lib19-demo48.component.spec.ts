import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo48Component } from './lib19-demo48.component';

describe('Lib19Demo48Component', () => {
  let component: Lib19Demo48Component;
  let fixture: ComponentFixture<Lib19Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
