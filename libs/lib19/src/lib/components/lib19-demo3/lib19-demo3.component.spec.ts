import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo3Component } from './lib19-demo3.component';

describe('Lib19Demo3Component', () => {
  let component: Lib19Demo3Component;
  let fixture: ComponentFixture<Lib19Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
