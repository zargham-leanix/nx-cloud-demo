import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo42Component } from './lib3-demo42.component';

describe('Lib3Demo42Component', () => {
  let component: Lib3Demo42Component;
  let fixture: ComponentFixture<Lib3Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
