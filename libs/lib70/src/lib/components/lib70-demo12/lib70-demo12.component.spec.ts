import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo12Component } from './lib70-demo12.component';

describe('Lib70Demo12Component', () => {
  let component: Lib70Demo12Component;
  let fixture: ComponentFixture<Lib70Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
