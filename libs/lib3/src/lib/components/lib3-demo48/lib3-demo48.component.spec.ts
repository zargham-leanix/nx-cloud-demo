import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo48Component } from './lib3-demo48.component';

describe('Lib3Demo48Component', () => {
  let component: Lib3Demo48Component;
  let fixture: ComponentFixture<Lib3Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
