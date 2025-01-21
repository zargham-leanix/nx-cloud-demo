import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo26Component } from './lib3-demo26.component';

describe('Lib3Demo26Component', () => {
  let component: Lib3Demo26Component;
  let fixture: ComponentFixture<Lib3Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
