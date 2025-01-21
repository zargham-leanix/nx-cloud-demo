import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo26Component } from './lib70-demo26.component';

describe('Lib70Demo26Component', () => {
  let component: Lib70Demo26Component;
  let fixture: ComponentFixture<Lib70Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
