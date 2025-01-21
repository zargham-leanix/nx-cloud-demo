import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo48Component } from './lib1-demo48.component';

describe('Lib1Demo48Component', () => {
  let component: Lib1Demo48Component;
  let fixture: ComponentFixture<Lib1Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
