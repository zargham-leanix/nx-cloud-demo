import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo26Component } from './lib96-demo26.component';

describe('Lib96Demo26Component', () => {
  let component: Lib96Demo26Component;
  let fixture: ComponentFixture<Lib96Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
