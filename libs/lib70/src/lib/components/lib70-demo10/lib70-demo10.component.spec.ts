import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo10Component } from './lib70-demo10.component';

describe('Lib70Demo10Component', () => {
  let component: Lib70Demo10Component;
  let fixture: ComponentFixture<Lib70Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
