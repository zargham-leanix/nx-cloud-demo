import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo32Component } from './lib19-demo32.component';

describe('Lib19Demo32Component', () => {
  let component: Lib19Demo32Component;
  let fixture: ComponentFixture<Lib19Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
