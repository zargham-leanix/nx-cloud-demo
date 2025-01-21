import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo44Component } from './lib70-demo44.component';

describe('Lib70Demo44Component', () => {
  let component: Lib70Demo44Component;
  let fixture: ComponentFixture<Lib70Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
