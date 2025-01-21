import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo42Component } from './lib1-demo42.component';

describe('Lib1Demo42Component', () => {
  let component: Lib1Demo42Component;
  let fixture: ComponentFixture<Lib1Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
