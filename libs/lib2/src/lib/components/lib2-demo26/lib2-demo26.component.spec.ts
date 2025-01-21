import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo26Component } from './lib2-demo26.component';

describe('Lib2Demo26Component', () => {
  let component: Lib2Demo26Component;
  let fixture: ComponentFixture<Lib2Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
