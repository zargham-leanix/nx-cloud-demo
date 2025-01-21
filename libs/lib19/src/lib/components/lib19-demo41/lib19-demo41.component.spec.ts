import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo41Component } from './lib19-demo41.component';

describe('Lib19Demo41Component', () => {
  let component: Lib19Demo41Component;
  let fixture: ComponentFixture<Lib19Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
