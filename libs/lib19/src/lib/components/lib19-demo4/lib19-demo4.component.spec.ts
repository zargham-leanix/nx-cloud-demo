import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo4Component } from './lib19-demo4.component';

describe('Lib19Demo4Component', () => {
  let component: Lib19Demo4Component;
  let fixture: ComponentFixture<Lib19Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
