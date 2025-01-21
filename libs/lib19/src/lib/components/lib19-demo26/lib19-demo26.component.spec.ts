import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo26Component } from './lib19-demo26.component';

describe('Lib19Demo26Component', () => {
  let component: Lib19Demo26Component;
  let fixture: ComponentFixture<Lib19Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
