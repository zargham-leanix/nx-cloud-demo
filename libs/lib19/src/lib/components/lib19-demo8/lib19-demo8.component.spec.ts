import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo8Component } from './lib19-demo8.component';

describe('Lib19Demo8Component', () => {
  let component: Lib19Demo8Component;
  let fixture: ComponentFixture<Lib19Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
