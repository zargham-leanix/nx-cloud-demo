import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo33Component } from './lib3-demo33.component';

describe('Lib3Demo33Component', () => {
  let component: Lib3Demo33Component;
  let fixture: ComponentFixture<Lib3Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
